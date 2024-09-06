import resend
from typing import Dict
from fastapi import FastAPI

resend.api_key = "re_D4A82adt_2BLaLBqHQ5hz9UT6jwDgYZRE"

app = FastAPI()

@app.post("/")
def send_mail() -> Dict:
    params: resend.Emails.SendParams = {
        "from": "onboarding@resend.dev",
        "to": ["delivered@resend.dev"],
        "subject": "Hello World",
        "html": "<strong>it works!</strong>",
    }
    email: resend.Email = resend.Emails.send(params)
    return email