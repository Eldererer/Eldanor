ELDANOR PWA – PROTOTYP V1

Windows:
1. Ordner entpacken.
2. Am einfachsten über einen kleinen lokalen Webserver starten.
   Beispiel mit Python (falls installiert):
   python -m http.server 8080
3. Im Browser http://localhost:8080 öffnen.

Wichtig:
Ein Doppelklick auf index.html zeigt die App zwar, aber Service Worker/PWA-Funktionen
benötigen einen Webserver (localhost oder HTTPS).

iPhone:
Für "Zum Home-Bildschirm" muss die App über HTTPS erreichbar sein.
Dazu kann der Ordner später z.B. auf einen privaten Webspace / GitHub Pages / Cloudflare Pages.
Die App selbst benötigt kein Backend; Daten werden lokal im Browser gespeichert.

V1 enthält:
- Eldanor-Weltkarte (vorläufig)
- 7 Helden
- HP-Verwaltung
- Attribute/Fähigkeiten/Inventar
- W4/W6/W8/W10/W12/W20
- W20 Vorteil/Nachteil + Modifikator
- Chronik/Quests
- Gruppeninventar
- lokale Speicherung
- Offline-Grundgerüst
