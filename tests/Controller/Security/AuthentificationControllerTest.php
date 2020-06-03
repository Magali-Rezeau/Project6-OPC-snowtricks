<?php

namespace Tests\Controller\Security;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AuthentificationControllerTest extends WebTestCase
{
    public function testDisplayLogin()
    {
        $client = static::createClient();
        $client->request('GET', '/login');
        $this->assertSelectorTextContains('h2', 'Se connecter'); 
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

    public function testLoginWithBadCredentials()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/login');
        $form = $crawler->selectButton('Valider')->form([
            '_username'=> 'louisa',
            '_password' => 'fakepassword'
        ]);
        $client->submit($form);
        $this->assertResponseRedirects('http://localhost/login');
        $client->followRedirect();
        $this->assertSelectorExists('.login-error');
    }

    public function testSuccessfullLogin()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/login');
        $form = $crawler->selectButton('Valider')->form([
            '_username'=> 'marie',
            '_password' => 'marie'
        ]);
        $client->submit($form);
        $this->assertResponseRedirects('http://localhost/');
    }
}
