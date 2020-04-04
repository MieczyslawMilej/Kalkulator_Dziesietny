import Calculator from "./Calculator";

class DecCalculator extends Calculator {
  constructor(settings) {
    super(settings);
    console.log(this.getName());
  }

  add(numberX, numberY) {
    // Dodaj numberX i numberY - tablice cyfr w taki sposób, aby zwrócić tablice o rozmiarze o 1 większym
    // (wynik ma 1 cyfrę więcej). Dodawanie ma być wykonane w systemie liczbowym o podstawie 10.
    // Zadeklaruj zmienną - wynik. Wynik będzie tablicą cyfr (dla zapisu cyfr użyjemy wartości liczbowych).
    // Wynik będzie miał jedną cyfrę więcej niż dodawane wartości.
    // Zadeklaruj zmienną reprezentującą wartość przenoszoną na poprzednie cyfry (np. dodając 8 i 4 przenosimy 1).
    // Na samym starcie, gdy będziemy dodawali ostatnie cyfry, nic nie przenieśliśmy, więc na starcie wartość
    // tej zmiennej będzie równa 0.
    // Przebiegnij w pętli przez indeksy wszystkich cyfry jednej z dodawanych liczb, począwszy od cyfry ostatniej
    // (dodajemy w tabelce zaczynając od dodawania cyfr jedności, czyli od ostatnich).
    // W pętli dla każdej dodawanej pary cyfr, wylicz ich sumę powiększoną o przenoszoną wartość.
    // Reszta z dzielenia tej sumy przez 10 będzie cyfrą wyniku,
    // a wynik dzielenia tej sumy przez 10 (zaokrąglony do dołu - Math.floor) będzie przenoszoną wartością.
    // Pierwzsą cyfrą wyniku będzie ostatnia przenoszona wartość.
    // Zwróć tak przygotowany wynik.
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = numberX.length - 1; i >= 0; i--) {
      let carryBit = numberX[i] + numberY[i] + result[i];
      if (carryBit % 10) {
        result[i] = Math.floor(carryBit);
        result[i - 1] = 1;
      } else {
        result[i] = carryBit;
      }
    }
    return result;


  }

  changeNumber(root) {
    // Metoda jest wywoływana, gdy użytkownik kliknie cyfrę z dodawanej liczby. root będzie rodzicem klikniętego
    // spana.
    // Temu spanowi przypisz atrybut contenteditable o wartości "true".
    // Wywołaj również jego metodę focus.
    let activeElement = root.querySelector(".active");
    activeElement.setAttribute("contenteditable", "true");
    activeElement.focus();
  }

  updateResult() {
    // Z tablicy resultNumberArray przepisz cyfry do odpowiednich elementów dokumentu (kalkulatora).
    // Przypomnienie - odwołanie do elementu zawierającego wszystkie elementy kalkulatora: this.$calculatorDOMElement

    
  }

  initEvents() {
    // Wywołaj oryginalną (nadpisywaną) implementację metody initEvents.
    // Z elementów kalkulatora wybierz ten ze znaczkiem "+". Przypisz jemu obsługę zdarzenia polegającego
    // na jego kliknięciu.
    // Po jego kliknięciu powinny zostać wywołane metody kalkulatora - aktualizująca wartości liczb przypisanych do właściwości kalkulatora oraz aktualizacja wyliczonego wyniku.
      super.initEvents();


      this.$calculatorDOMElement.addEventListener("click", (event) => {
        if (event.target.parentElement.classList.contains("operator-bar")) {
          this.checkNumber();
          this.updateResult();
        }
      });

  }
}
























export default DecCalculator;
