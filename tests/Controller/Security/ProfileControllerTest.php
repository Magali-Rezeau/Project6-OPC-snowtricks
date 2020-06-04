<?php

namespace Tests\Controller\Security;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ProfileControllerTest extends WebTestCase
{
    public function testPageIsRestricted()
    {
        $client = static::createClient();
        $client->request('GET', '/profile');
        $this->assertEquals(302, $client->getResponse()->getStatusCode());
    }
}
