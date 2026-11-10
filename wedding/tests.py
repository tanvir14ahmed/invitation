from django.test import TestCase, Client
from django.urls import reverse

class InvitationViewTests(TestCase):
    def test_invitation_page_renders_successfully(self):
        client = Client()
        response = client.get(reverse('invitation'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Tanvir")
        self.assertContains(response, "Afsa")
        self.assertContains(response, "Tanvir Ahmed")
        self.assertContains(response, "Afsa Jahan Rimi")
        self.assertContains(response, "AJM. Humayon Kabir")
        self.assertContains(response, "Faisal Ahmed")
        self.assertContains(response, "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
        self.assertContains(response, "In the name of Allah, the Most Gracious, the Most Merciful")
        self.assertContains(response, "font-greatvibes")
        self.assertContains(response, "The Grand Hall Convention Center")
        self.assertContains(response, "https://maps.app.goo.gl/rhFnDu2FZYefCht66")
        self.assertContains(response, "01823555505")
        self.assertContains(response, "01911917926")
        self.assertContains(response, "https://tanvir.codelab-by-tnv.top/")
