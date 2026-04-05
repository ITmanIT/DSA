import random
def symuluj_mecz():
    print("Symulacja meczu Polska - Szwecja")
    gole_polska = random.randint(0, 4)
    gole_szwecja = random.randint(0, 4)
    print(f"Wynik meczu: Polska {gole_polska} - {gole_szwecja} Szwecja")
    print ("_" * 30)
symuluj_mecz()