import { Container } from '@mantine/core';
import classes from './PrivacyPolicy.module.css';


export function PolitykaPrywatnosci() {

  return (
    <Container fluid p={20} className={classes.component}>
        <section>
            <h2>Polityka prywatności</h2>

            <p><strong>1. Informacje ogólne</strong></p>
            <p>Witamy na stronie <a href="https://jeli.pl">jeli.pl</a>. Niniejsza polityka prywatności określa, w jaki sposób zbieramy, przetwarzamy i chronimy dane statystyczne oraz dane przekazane przez użytkowników za pomocą formularza kontaktowego.</p>

            <p><strong>2. Rodzaje zbieranych danych</strong></p>
            <p>Podczas korzystania z naszej strony internetowej zbieramy dane statystyczne, takie jak liczba odwiedzin, czas spędzony na stronie i źródło ruchu. Dane przekazane przez użytkowników za pomocą formularza kontaktowego obejmują imię i adres e-mail.</p>

            <p><strong>3. Cel zbierania danych</strong></p>
            <p>Zbieramy dane statystyczne w celu analizy ruchu na stronie i poprawy jakości treści i funkcjonalności. Dane przekazane przez użytkowników za pomocą formularza kontaktowego są używane w celu udzielenia odpowiedzi na pytania lub komentarze.</p>

            <p><strong>4. Pliki cookie</strong></p>
            <p>Nasza strona internetowa używa jedynie ciasteczek funkcyjnych, które służą do dostosowywania języka i motywu kolorystycznego. Żadne dane nie są trwale przechowywane.</p>

            <p><strong>5. Udostępnianie danych osobowych</strong></p>
            <p>Dane statystyczne są anonimowe. Dane przekazane przez użytkowników za pomocą formularza kontaktowego nie są udostępniane osobom trzecim i są używane jedynie w celu udzielenia odpowiedzi.</p>

            <p><strong>6. Przechowywanie danych</strong></p>
            <p>Żadne dane nie są trwale przechowywane na naszej stronie. Wszystkie dane statystyczne są analizowane anonimowo.</p>

            <p><strong>7. Kontakt</strong></p>
            <p>W razie pytań dotyczących naszej polityki prywatności lub funkcjonowania strony, prosimy o kontakt pod adresem e-mail: <a href="mailto:admin@jeli.pl">admin@jeli.pl</a>.</p>

            <p><strong>8. Zmiany w polityce prywatności</strong></p>
            <p>Zastrzegamy sobie prawo do aktualizacji naszej polityki prywatności w związku z ewentualnymi zmianami w prawie lub naszych usługach.</p>
        </section>

        <section>
            <h2>Pliki cookie</h2>

            <p><strong>1. Co to są pliki cookie?</strong></p>
            <p>Nasza strona internetowa używa jedynie ciasteczek funkcyjnych, które służą do dostosowywania języka i motywu kolorystycznego. Żadne dane nie są trwale przechowywane.</p>

            <p><strong>2. Zarządzanie plikami cookie</strong></p>
            <p>Nie ma potrzeby zarządzania plikami cookie, ponieważ są one używane jedynie w celach funkcjonalnych.</p>

        </section>
    </Container>
  );
}