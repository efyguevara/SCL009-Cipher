
# ¡CIFRATE!

En la actualidad, la tecnología avanza cada vez mas rápido, y es necesario manejar y resguardar una cantidad importante de información que debe ser solo de uso personal, pero ¿Cómo logramos que esa información no sea utilizada por otras personas?

Para esto, se ha creado ¡CIFRATE! una aplicación que te permite codificar cualquier información que necesites mantener confidencial.

### ¿Cuál es el objetivo principal de esta aplicación? 

CIFRATE, se ha desarrollado para que podamos mantener la confidencialidad de la información que solo debe manejar un usuario, como por ejemplo:
* Información Bancaria (Cuentas, datos de ingreso a banca online).
* Redes Sociales (Instagram, Facebook, Twitter).
* Portales de compra online (Amazon, Aliexpress).
* Portales de servicios (Registro Civil, SII, Fonasa)
* Y cualquier página o aplicación que requiera información confidencial para su ingreso.
 
 Con CIFRATE los usuarios pueden guardar de forma segura su información sin preocuparse de que pueda ser utilizada en caso de que alguien la obtenga, pues al tener el mensaje cifrado solo deberan guardarlo junto con el código de desplazamiento y podrán descifrarlo en la aplicación cuando lo deseen.

 ### ¿Quiénes pueden usar CIFRATE?

* Todas las personas que tengan acceso a internet y deseen almacenar o compartir de forma segura su información.


### ¿Cómo usar CIFRATE?

* Para cifrar:
    
    1. Ingresa en primer campo la información que deseas cifrar
    
    2. Ingresa el número de desplazamiento que quieres utilizar para cifrar tu información.
    
    3. Haz click en el boton "CIFRAR MENSAJE" y este aparecerá en el siguiente campo.
    
    4. Copia tu código cifrado y guardalo junto con el número de desplazamiento que utilizaste (esta sera tu llave para descifrar el mensaje cuando lo necesites).
    
    5. Si deseas cifrar un nuevo mensaje haz click en el boton "Limpiar" y repite el proceso.

* Para descifrar:
  
    1. Ingresa/pega tu información cifrada en el primer campo.
    
    2. Ingresa el número de desplazamiento que utilizaste para cifrar el mensaje (si este número no es el que usaste para cifrar tu mensaje, el resultado será diferente del original).
    
    3. Haz click en el boton "DESCIFRAR MENSAJE" y tu mensaje original aparecerá en el siguiente campo.
    
    4. Si deseas descifrar un nuevo mensaje, haz click en el boton "LIMPIAR" y repite el proceso.




### Diseño:

Con la finalidad que el usuario navegue intuiivamente en la aplicación, sin necesidad de hacer cambios de pantalla para una mejor adaptabilidad; el diseño se realizó en una sola página donde se muestra todo el contenido.

Se estructuró de la siguiente manera:

* Bienvenida a la página.
* Breve introducción para que el usuario se identifique con el objetivo de la aplicación.
* Instrucciones para cifrado y descifrado de información.
* Cuadro de texto 1 (Para ingresar la información que se desea cifrar o descifrar).
* Desplazamiento (Número de caractéres que el usuario escoge desplazar para cifrar/descifrar su mensaje).
* Boton para Cifrar el mensaje ingresado en el Cuadro de texto 1.
* Boton para Descifrar el mensaje ingresado en el Cuadro de texto 1.
* Cuadro de texto 2 (En este espacio aparecerá el mensaje cifrado/descifrado de acuerdo a los parámetros que indique el usuario)
* Boton "LIMPIAR" (elimina el contenido de todos los pasos anteriores y permite que el usuario ingrese nuevos datos).



#### Flujo de Datos (Se mantuvo hasta la ultima actualización) 
![Flujo de datos planificado](https://lh3.googleusercontent.com/u09MsFNbxn5LOz5Es532IjLC7mCXXxGhFjlpALZPx10eSPe7RyCvkMs06ItHa5N14md11Zk9PLBhSojzEizzSYoAE4IFL4ZSfcgVVXiAprWjWYlCsp6L3_YdMxiJZmnx7M0ileb1CMu4F-im5MR4YTv5UJPyZcHxyWhRnAtlPK-mBYGWYeZN7rwnspapcRFvSFFiz1qA7uqP6aCQklxy6wDjgaSWzo7u3n-dHiLZ65y0-Ps7U9Yh0LonvnJCRJAzB_0vUNCkEDq4BzrzjKl10QZKenDjvJ2pRaFnNrZMah_F7QrNMu-2GMkxrilD-wqueGIm8ZdAUZCAU1F7Wq6H2oJ5lstLDZmYjQ5q7P5o0aNizYkGNbP09UqHnNamlnqwW8Rr7cLs5jabBJUOV0hAKIwO4mvb08Jr0_rbSI4fsiYs5-DzYiaEp3O6YCzyHD1wQUYewAsx9fuAXH6-wMWzNZ-vucGWcgP1Amlh6z6GjfrubiJtkeJnyechGbpwoOULbSBeEWt1UMP7Cg9r-MZhDenln3zh_hzV1s8dxe8yuZNQYPQqSPe7n_Ig3qaO5Bm7aY8LNiVgBdtMx1S66x45T-hWQ4c_pe7ZPP_UAKbrgj2rofLcbM5bi9aS-gJD1X5ijRgFx393BnY8-LvS6ek8BBzlu4Z05-00=w739-h620-no)

#### Prototipo de baja fidelidad realizado durante el primer sprint del proyecto.
![Prototipo de baja fidelidad](https://lh3.googleusercontent.com/sQ7fbeOJPsHaoQcx9kJqp4XqgLA5q1yykqCpLEJUWhpU6g2jQCJH6OcxjV50cj8aIqnsiJq8r0FT8YYSedaa7PRFxeMl_ye1gJCawUggrCnNPShXqZ1w42rk8Yk1o9so-QmNKQY_LNhR0Txv03Q8h7dORqFFVFm3xYJkgYJ_aC0gu6JWprkEFtAvwT3WCDNhB6x1eTOgsjcWdyyBm6PBcjD4-tt_uMnEZ87W7Uc2T9aRq08oOQo70YsVWtankqtVyyzaW9xDRYiBlpQL6xrFJY9r_gMrAy3JPKr-jZzDpwD_NGapN6mYd3drcpaCOitdZxsPAhRS0eMqW4l140waCfR6NY9kxIbXiMztb76fviBqqYrHNLa6zNeKsvhqKrJfKuzyXp4-y4AKef1RrU57Gid9g9tq-E6PfYbOJbYlJD5KX26mmZtXoKHW37Tcm1gVFwYmi5SsEgf_pd5y25Lxh7rZV7i_kYzccNfM4NCcg98Yi-nm63OcwQZ4PxhnCkIZbHZ73-Nex_1_QH5J26XhJf12SwHXZxP4vsTYWDYWCMzYmjyruZkjOKjhuG34F2AvIgDmQxy-sMxfT8GFwASj0LPzMdgbyUULYcawulQxnxKCbcJqbqFnVW2jonoc8xvRMvUqmE2a20Nza1Ynmqb85LzZp-imBbL5=w430-h669-no)

#### Primera vista realizada de acuerdo al prototipo de baja fidelidad.
![Primera vista realizada](https://lh3.googleusercontent.com/VWmYUDvVsfDtOLNHqZ2Ekninr85wRARTD0GW1VHR8Hew4oKzFknmjSwSu1UJrxm_2VRXEkRWCKWzscKvmq3C2GUSqW2Sw-cfuegilrLdeHkKzJmrWcQiK594dOtiTMMKgn93iUsmknZexzEoWxwsIZmDEI__ngFRKTQvfZVEEh74Rzrqr5eDybyaGAafa4rTBo-e5fYAElJM4L997t-A2GY0bIK3FO-tnzNIG0JEqAlkVFpWwAKVE-kcBOsaEzclTpJlRcZBlYxstomUjvObaCAL7Yomhtu5Z0zB9vgDzmWikJXMekLcGb7vYld5arMfUBVt5Qp5SHYaSgSjod2qcdg05LaOEVsbvwO5IEh-kOV9DTSLuLjT2-NWNX0DjblBiknswfEte6wMK1fIa7nMEks1THpBtPU998jfiaIfAJDm9UMbjQh1UsYfoNqu51Wfj9W4olnqOs0Ss2IlpthNasC03RXB2L8oF46vbnv6q3YMiECDpCmOqc-Ro0_TbzEdawS2IS4vqKwblZpxjzmi9HNZvUS3LYqBZ5_9Xfhkow2JGfGb5k01fbRLNvx2eMcJ4esG345FNCpuzuRdId7wAs0GLQXrkFAF7xplrGZ7obNcXHWNI_G4qE3c4K-OgmgxFw1jvRbW2jNfKjQxvplNneKmMRQulylc=w669-h620-no)

#### Probando CSS
![Probando CSS](https://lh3.googleusercontent.com/1a1Io3TGypK4Jzq0ur248t7GzhUJBNuV4hwdlFNjiuendSq-9HoFG6rsKZjkWdFjewNE-OQiCWowciiEqZfQH3XhjVFiETC2V1HOp-O0ZQ_4c4CSDrJc_PejBm2rMUD-tAFA-yu_rY2TH1n50tUVUdmvGAH7A4mlSH0fp6dmWi8_IENCeqTD9fjJ14OPxrAsqSzIFlRHz3jnaVmSMYF1WKsgpkGIVrEnwbDRHsxlx-meg7YQlUzcqGsQNTn8WgQ4SfiQuT2VdSy8MsbQjBZYWEjV-pY6fUBkDvaIZ-FnVvLE3NZWmYT7DBHfNWWny4LOnjwZ6aUuyHWS3QnBYpYCc8toWgT3NsmKwQHDI73Lfqiiq0QoQyAZ0k8cBWE8DBdE8fTdPLQUi9RPkBim61UO2krXSQ0PZgPgX7Niq4iD1tQNOwl4EFp5OVQHGGwb8vvuWFMrk_QBlF9O7nP3Vqk0KdbYNbxlcOLe-4yYsyauyeBi36lkq4v6tW2iEzI6zSfv7eDO7fuilTjTcHlGp49Smn5sbysNENeJJG3rHuTwAz1usLXnSqug2rjx0y3fkNS8KPKpFEcLbLHxlQZErdUQ40lOtt_vzMUlLUmvCV5ubeZNaV5HNykAlqyApcVRpU9750JGTyY7BvmHMBb6RWgKx9bn7DtKkPAa=w1102-h620-no)

#### Pantalla para entrega (parte 1)
![Pantalla"final" parte 1](https://lh3.googleusercontent.com/_nwxmtYrzTN_l0Yy94KvHO-DWRITMuiCBedfZHYDk1OtldqnTa4nXmW94Uu5bfKnG125vQ7n2oyBQbUuYWT3C1qnBEEbcmPlCzCnqHRBX-RIV_Zolm3zbiN9K-NjFOMaLzhlBn19b5IS9oifU3_4MB-noGuJu257K-DrBF63s_1lrzZ9kwnppx9zB6J75Pbrj8-HK7SSgP2QleN33kDs2OqLPZ_DBle_IaVXhONJxAKz8IRp-b7je7rb9lYo6YYJUr6uaeE3nnJRYlAJDPGSU8ZHz2lJ3ttR0mj2GrGSR1sx3jTTeY29saI0NVmL9LXVlzrAxnE1Kg1TN4QId5C_h7bGrnM__JCs17HDINR5J4WRYeIqTkQ2sHQN_4eJCCTZiv5R9zRMD4ylJuoNJ0uecS-mDrWOUT2AljaYhxJB9lT5M1RoUQDmWzmfGz_Vp6k7LkeKP_KoqLG-TwHwicg4xdb6EkkvWsDU-dCY3PdwfEBw5p67w6CrrAOUe7GB08iIxtEKDvbx56kHDqN6k8fmyZsUc_taslkFY9PV5zBRfcoNF0zk2ZR3x12te2fhBzlL6K0L7y8fM_2qRwuMd2lGfWG5heMxao4nuAtCuHIx_xV7PP7HQUMQpJA8kQRLw2z3buya5NHyhLPxdvo7WwU5zHSs3OidVKP5=w1133-h669-no)

#### Pantalla para entrega (parte 2)
![Pantalla"final" parte 2](https://lh3.googleusercontent.com/o39Xn9myeLm7L7CrWDmYZxsVIv5KxUQpQvU9rfF4G2feYNX1-IgPRHW5gBME4VzgvLdBp8K-TITG6OhsvH2Vnug7VVp7mBLbBa_vEE58Hg_Szkz5WE5yXfJtDJEOt-PJIzK00sKTdkd3FB4Csx_a1LcbiBhzR1XUe6JbRRHUznV2BAMKyC_SO9qmK3UH64B6dwQreOAnYqJTygDf14Zvq5VDecRSSQPncStaKkIaREZZoFIQMGSABL3W6cmtekcsLIAVrccsx4UE7CPyTYRza6dD2IJXIN62ueIrVHAKKFuek4TgjYl8Wapml7Fm0OkjxyyHsCm3ELbxbg7OCv16P2n1cLz2FANLbNAUNpq9bGBi47XYGJEMlP1fGrumPqe_NfQHaBwi0AsiVcLYczgSWC8m9Se3tPtbIOdgqicJWxXUrcBGU_NM65PdW9ZRQsybgnCXrmC20c8Hvww4QHUCjPTd_WfC2tcX0UziUfd-ujnSkBANGmW98Redy0ursE4n0VEpbGO2nQKuAr0L6F2Q7HJhFFQ_xHQBjLmSk3aG2_rAayIf1xxeSm22AntOYFU1Pz-Xzor4m-lGiTUMd4TEBZq34yIU4lpwa1j6qr0bx0UnoyKRqFLqF9O_XD3cTzwWwTfFrDCeeN8VvEZnxHSphJMoYE_0U7Sd=w1129-h669-no)