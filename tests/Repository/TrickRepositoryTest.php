<?php

namespace Tests\Repository;

use App\Repository\TrickRepository;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class TrickRepositoryTest extends KernelTestCase
{
    public function testCount()
    {
        self::bootKernel();
        $tricks = self::$container->get(TrickRepository::class)->count([]);
        $this->assertEquals(11, $tricks);
    }
}
