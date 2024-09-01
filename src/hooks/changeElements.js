import { useState } from "react"
import confetti from 'canvas-confetti'

export const useChangeElements = () => {
    const [index, setIndex] = useState(0)
    const [textP, setTextP] = useState('Vamos, respondeme! ')
    const [image, setImage] = useState('https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif')
    const [showCard, setShowCard] = useState(false)

    const options = ['Segura?', 'Segurisima?', 'Estas completamente segura?', 'No te arrepentiras?', 'Pero si estas segura?', 'No hay vuelta atras', 'No hay devoluciones', 'No hay garantias', 'No hay reembolsos', 'No hay cambios', 'No hay nada', 'No hay', 'Que no hay', 'Enserio me vas a rechazar igual que a mi canchita :C ']

    const handleButtonNo = () => {
        setIndex(prevIndex => {
            const newIndex = prevIndex + 1;
            setTextP(options[newIndex] || options[0]); // Muestra el texto de las opciones
            if (newIndex >= options.length) {
                return 0; // Resetea el índice si excede el tamaño de opciones
            }
            return newIndex;
        });
        setImage('https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif');
        setShowCard(true); // Asegúrate de que la carta esté visible
    }

    const handleButtonYes = () => {
        setImage("https://i.pinimg.com/originals/e4/9d/7b/e49d7b7e965f09e31b498314b02e3662.gif");
        setTextP(`\n\nDesde el primer momento en que te conocí, supe que quería crecer contigo. Quiero sonreír y compartir los momentos más especiales de mi vida a tu lado. Imagina ver cómo nuestros amigos se sorprenden al ver que seguimos juntos, creciendo y evolucionando juntos.\n\nQuiero que nuestra historia sea eterna, sin un final. Quiero ser la razón por la cual creas en el "por siempre".\n\nQuiero ser el último pensamiento del día, y el primero en el amanecer. Quiero ser esa parte de ti que te hace temer perder, porque te necesito más de lo que las palabras pueden expresar.\n\nQuiero ser todo para ti, ahora y siempre.\n\nCon todo mi amor,\n`);
        setShowCard(true); // Muestra la carta
        confetti();
    }

    return { handleButtonNo, handleButtonYes, textP, image, showCard }
}