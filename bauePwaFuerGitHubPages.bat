
@REM Damit die erzeugte PWA im von GitHub Pages vorgegebenen Ordner "docs" funktioniert, müssen wir beim Aufruf von "ionic build --prod"
@REM spezielle Werte angeben.
@REM
@REM Lösung für Angular: https://stackoverflow.com/a/56000397/1364368
@REM Anpassung Lösung von Ionic ("--" vor "--base-href"): https://github.com/ionic-team/ionic-cli/issues/3600#issuecomment-436798575

ionic build --prod -- --base-href "https://mdecker-mobilecomputing.github.io/Ionic_HalloName/" --output-path=docs

@REM Die beiden Attribute können auch in der Datei angular.json angepasst werden, aber wegen der Änderung von base-href
@REM funktioniert dann "ionic serve" nicht mehr.
