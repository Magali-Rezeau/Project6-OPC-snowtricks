<?php

namespace Tests\Controller;

use App\Entity\Trick;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class TrickControllerTest extends WebTestCase
{
    public function testDisplayTrick() 
    {
        $client = static::createClient();
        $client->request('GET', '/trick/mute');
        $this->assertSelectorTextContains('h1', 'Mute'); 
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }
    public function testDisplayEditTrick() 
    {
        $client = static::createClient();
        $client->request('GET', '/trick/mute');
        $this->assertSelectorTextContains('h1', 'Mute'); 
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }
   
    public function testSlug()
    {
            $trick = new Trick();
            $this->assertEquals('name-of-the-trick', $trick->slugify('Name of the trick'));  
    }
}
