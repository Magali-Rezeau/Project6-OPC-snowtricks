<?php

namespace Tests\Controller\Security;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class ProfileControllerTest extends WebTestCase
{
    public function testPageIsRestricted()
    {
        $client = static::createClient();

        $client->request('GET', '/profile');

        $this->assertEquals(302, $client->getResponse()->getStatusCode());
    }
}
