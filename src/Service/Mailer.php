<?php

namespace App\Service;

use Twig\Environment;
use Symfony\Component\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

class Mailer
{

    private $mailerInterface;

    public function __construct(MailerInterface $mailerInterface)
    {
        $this->mailerInterface = $mailerInterface;
    }

    public function sendMessage($from, $toEmail, $toUsername, $subject, $template, array $parameters)
    {
        $email = (new TemplatedEmail())
        ->from(new Address($from))
        ->to(new Address($toEmail,$toUsername))
        ->subject($subject)
        ->htmlTemplate($template)
        ->context(
            $parameters
        );
        $this->mailerInterface->send($email);
    }
}