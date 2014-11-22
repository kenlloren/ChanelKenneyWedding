import os
import jinja2
import webapp2
import time
import re

from google.appengine.ext import db

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),autoescape = True)

#quick handler to handle html templates
class Handler(webapp2.RequestHandler):
	def write(self, *a, **kw):
		self.response.out.write(*a, **kw)

	def render_str(self, template, **params):
		t = jinja_env.get_template(template)
		return t.render(params)

	def render(self, template, **kw):
		self.write(self.render_str(template, **kw))
		
#main page class
class MainPage(Handler):
	def get(self):
		self.render("main.html")

#About page class
class AboutPage(Handler):
	def get(self):
		self.render("about.html")

class WeddingDetailPage(Handler):
	def get(self):
		self.render("WeddingDetail.html")

#create blog content database
class BlogContent(db.Model):
	blogtitle = db.StringProperty(required = True)
	blogcontent = db.TextProperty(required = True)
	blogcreated = db.DateTimeProperty(auto_now_add = True)
	#def render(self):
        #	self._render_text = self.blogcontent.replace('\n', '<br>')
        #	return self.render_str("blog.html", p = self)

#create blog page handler
class BlogPage(Handler):
	def render_blog(self):
		blogs = db.GqlQuery("SELECT * FROM BlogContent ORDER BY blogcreated DESC")
		self.render("blog.html",blogs=blogs)

	def get(self):
		self.render_blog()

	def post(self):
		self.redirect("/blog/newpost")	

	
#create new blog post handler
class NewBlogPost(Handler):
	def render_newblog(self, subject = "", content = "", error = ""):
		self.render("newBlog.html", subject = subject, content = content, error = error)
	
	def get(self):
		self.render_newblog()
	
	def post(self):
		blogtitle = self.request.get("subject")
		blogcontent = self.request.get("content")

		if blogtitle and blogcontent:
			a = BlogContent(blogtitle = blogtitle, blogcontent = blogcontent)
			a.put()
			post_id = str(a.key().id())
			time.sleep(1)
			self.redirect("/blog/%s" % post_id)
		else:
			blogerror = "Wedding blog needs a blog title and content!! "
			self.render_newblog(blogtitle, blogcontent, blogerror)

class BlogIDHandler(Handler):
	def get(self,post_id):
		post = BlogContent.get_by_id(int(post_id))
		if post:
			self.render("postIDBlog.html",post=post)

	def post(self):
		self.render_blog()
#RSVP Page
class RSVPContent(db.Model):
	email = db.StringProperty(required = True)
	fname = db.StringProperty(required = True)
	lname = db.StringProperty(required = True)
	coming = db.BooleanProperty(required = True)
	groupcount = db.IntegerProperty(required = False)
	message = db.TextProperty(required = False)
	rsvpcreated = db.DateTimeProperty(auto_now_add = True)

class RSVPIDHandler(Handler):
	def get(self,rsvp_id):
		person = RSVPContent.get_by_id(int(rsvp_id))
		if person:
			self.render("rsvpThanks.html",person=person)

	#def post(self):
	#	self.render_blog()

class RSVPPage(Handler):
	def render_rsvp(self, email = "xxx@xxx.com", fname = "First", lname = "Last", coming = "", rsvperror = ""):
		self.render("RSVP.html", email = email, fname = fname, lname = lname, rsvperror = rsvperror)
	
	def get(self):
		self.render_rsvp()

	def post(self):
		have_error = False
		rsvperror = ""
		email = self.request.get("email")
		fname = self.request.get("fname")
		lname = self.request.get("lname")
		iscoming = self.request.get("coming")
		groupcount = self.request.get("groupcount")
		message = self.request.get("message")

		if not valid_email(email):
			have_error = True
			rsvperror = rsvperror + "Not a valid Email address.  Please enter a new address<br>"
		
		if not email:
			have_error = True
			rsvperror = rsvperror + "Enter an Email address<br>"

		if not fname:
			have_error = True
			rsvperror = rsvperror + "Enter a First name<br>"
		
		if not lname:
			have_error = True
			rsvperror = rsvperror + "Enter a Last name<br>"


		if not iscoming:
			have_error = True
			rsvperror = rsvperror + "Must choice Yes or No to attend the wedding<br>"

		if have_error:
			self.render_rsvp(email, fname, lname, iscoming, rsvperror)
		else:
			if iscoming == "yes":
				coming = True
			else:
				coming = False
 
			if groupcount:
				groupcount = int(groupcount)
			else:
				groupcount = 0
			b = RSVPContent(email = email, fname = fname, lname = lname, coming = coming, groupcount = groupcount, message = message)
			b.put()
			rsvp_id = str(b.key().id())
			time.sleep(1)
			self.redirect("/RSVP/%s" % rsvp_id)

class SignUpPage(Handler):
	def get(self):
		self.render('signup-form.html')
	
	def post(self):
		have_error = False
		username = self.request.get('username')
		password = self.request.get('password')
		verify = self.request.get('verify')
		email = self.request.get('email')

		params = dict(username = username,
			      email = email)

		if not valid_username(username):
		    params['error_username'] = "That's not a valid username."
		    have_error = True

		if not valid_password(password):
		    params['error_password'] = "That wasn't a valid password."
		    have_error = True
		elif password != verify:
		    params['error_verify'] = "Your passwords didn't match."
		    have_error = True

		if not valid_email(email):
		    params['error_email'] = "That's not a valid email."
		    have_error = True

		if have_error:
		    self.render('signup-form.html', **params)
		else:
		    self.redirect('/SignUp/welcome?username=' + username)

class WelcomePage(Handler):
    def get(self):
        username = self.request.get('username')
        if valid_username(username):
            self.render('welcome.html', username = username)
        else:
            self.redirect('/SignUp')

EMAIL_RE  = re.compile(r'^[\S]+@[\S]+\.[\S]+$')
def valid_email(email):
    return not email or EMAIL_RE.match(email)

USER_RE = re.compile(r"^[a-zA-Z0-9_-]{3,20}$")
def valid_username(username):
    return username and USER_RE.match(username)

PASS_RE = re.compile(r"^.{3,20}$")
def valid_password(password):
    return password and PASS_RE.match(password)

app = webapp2.WSGIApplication([
	('/', MainPage),
	('/SignUp', SignUpPage),
	('/SignUp/welcome', WelcomePage),
	('/about',AboutPage),
	('/WeddingDetail',WeddingDetailPage),
	('/RSVP',RSVPPage),
	('/RSVP/([0-9]+)',RSVPIDHandler),
	('/blog/?',BlogPage),
	('/blog/newpost',NewBlogPost),
	('/blog/([0-9]+)',BlogIDHandler)
	], 
	debug=True)
