
@REM Damit die erzeugte PWA im von GitHub Pages vorgegebenen Ordner "docs" funktioniert, müssen wir beim Aufruf von "ionic build"
@REM spezielle Werte angeben.
@REM
@REM Lösung für Angular: https://stackoverflow.com/a/56000397/1364368
@REM Anpassung Lösung von Ionic ("--" vor "--base-href"): https://github.com/ionic-team/ionic-cli/issues/3600#issuecomment-436798575

ionic build -- --base-href "https://mdecker-mobilecomputing.github.io/Ionic_HalloName/"

@REM Die base-href ist hier hardcodiert für GitHub Pages. Zusätzlich muss in angular.json unter
@REM projects > app > architect > build > options > outputPath > base der Wert "docs" gesetzt sein.
@REM Für lokale Entwicklung ("ionic serve") funktioniert die default base-href davon.
