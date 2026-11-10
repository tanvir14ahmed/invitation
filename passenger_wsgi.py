import os
import sys

# Ensure current directory is in sys.path
SCRIPT_DIR = os.path.dirname(__file__)
sys.path.insert(0, SCRIPT_DIR)

# Set Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

# Import WSGI application
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
