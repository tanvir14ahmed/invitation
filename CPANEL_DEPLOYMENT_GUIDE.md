# cPanel Python Deployment Guide

This project is configured and ready for **cPanel "Setup Python App" (CloudLinux / Phusion Passenger)**.

---

### Files Prepared for cPanel:
1. **`requirements.txt`**: Standard, clean dependencies (`Django`, `whitenoise`, `asgiref`, `sqlparse`).
2. **`passenger_wsgi.py`**: The entry point required by cPanel's Passenger WSGI server.
3. **`whitenoise` static files**: Configured in `config/settings.py` so your CSS, JavaScript, audio, and images load on cPanel without requiring complex Apache rewrite rules.

---

### Step-by-Step Deployment on cPanel:

#### Step 1: Upload Files
1. In your local project directory, select all project files (except `.venv` and `__pycache__`).
2. Zip them into an archive (e.g., `invitation.zip`).
3. Log into your **cPanel**.
4. Open **File Manager** and navigate to your home directory or desired subfolder (e.g., `/home/username/invitation` or `public_html/invitation`).
5. Upload and extract `invitation.zip`.

---

#### Step 2: Create Python App in cPanel
1. In cPanel, search for and open **"Setup Python App"**.
2. Click **"Create Application"**.
3. Fill in the fields:
   - **Python version**: Select **3.10**, **3.11**, or **3.12**.
   - **Application root**: Path where your files were uploaded (e.g., `invitation`).
   - **Application URL**: Your domain or subdomain (e.g., `invitation.yourdomain.com`).
   - **Application startup file**: Enter `passenger_wsgi.py`.
   - **Application Entry point**: Leave blank (defaults to `application`).
4. Click **"CREATE"** in the top right corner.

---

#### Step 3: Install Dependencies
1. Under the **Configuration files** section in the Python App page, enter `requirements.txt` and click **Add**.
2. Click **"Run Pip Install"** and select `requirements.txt`.
   *(Or alternatively: Copy the source command at the top of the page, open cPanel **Terminal**, paste the command, and run `pip install -r requirements.txt`).*

---

#### Step 4: Collect Static Files
In cPanel **Terminal** (inside the active virtual environment):
```bash
python manage.py collectstatic --noinput
```

---

#### Step 5: Restart the Application
At the top of the **Setup Python App** page, click **"Restart"**.
Visit your domain/subdomain URL to verify the live invitation!
