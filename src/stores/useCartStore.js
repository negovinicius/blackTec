import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Iphone 14",
        price: 800,
        description:
          "O novo iPhone 14 vem com tecnologia de ponta, câmera de alta resolução, desempenho ultrarrápido e design elegante. Um smartphone para quem busca o melhor em qualidade e inovação.",
        image: "https://imgs.casasbahia.com.br/55048759/1g.jpg",
      },
      {
        id: 2,
        name: "Samsung Galaxy 5s",
        price: 400,
        description:
          "Com o Samsung Galaxy 5s, você terá desempenho robusto, tela vibrante e uma experiência suave para suas atividades diárias. Ideal para quem busca performance e custo-benefício.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSGuWGjnjBVG2_nkhMG80QrhKPy8MrqXpLA&s",
      },
      {
        id: 3,
        name: 'Smart TV Philco 40"',
        price: 1200,
        description:
          'Assista seus filmes e séries favoritos em alta definição com a Smart TV Philco de 40". Com Wi-Fi integrado e diversas conexões, você terá acesso a conteúdos de streaming com qualidade Full HD.',
        image:
          "https://a-static.mlcdn.com.br/470x352/smart-tv-40-full-hd-d-led-britania-android-btv40e3aagssgb-wi-fi-bluetooth-2-hdmi-2-usb/magazineluiza/237635100/668581d01896e1fd3b81753aecd26a26.jpg",
      },
      {
        id: 4,
        name: "SmartWatch Fitness",
        price: 200,
        description:
          "Monitore suas atividades físicas, batimentos cardíacos e notificações diretamente no pulso com o SmartWatch Fitness. Ideal para quem quer manter o controle de sua saúde e produtividade.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKODD4LTCYKpJTC5ET6TF2_F25yDHGJ6A-xg&s",
      },
      {
        id: 5,
        name: "Kit Teclado e Mouse Gamer Razer",
        price: 350,
        description:
          "Domine os seus jogos com o Kit Gamer, composto por teclado mecânico retroiluminado e mouse com DPI ajustável. Conforto e precisão garantidos para suas sessões de jogos intensas.",
        image:
          "https://http2.mlstatic.com/D_NQ_NP_832854-MLB53283848991_012023-O.webp",
      },
      {
        id: 6,
        name: "Notebook i7 Samsung",
        price: 2500,
        description:
          "Potente e versátil, o notebook com processador Intel Core i7 é perfeito para multitarefas, rodar softwares pesados e proporcionar alto desempenho, seja no trabalho ou no entretenimento.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OJ4XlUj18gq8aas0UIpzHKWukkjV5ddQSw&s",
      },
    ],
    cartItems: [],
  }),
  getters: {
    countcartItems(state) {
      return state.cartItems.length;
    },
  },
  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        toast.success("Item atualizado no carrinho", {
          timeout: 2000,
        });
      } else {
        item.quantity = 1;
        this.cartItems.push(item);
        toast.success("Item adicionado ao carrinho", {
          timeout: 2000,
        });
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        toast.success("Quantidade aumentada no carrinho", {
          timeout: 2000,
        });
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
        toast.success("Quantidade atualizada no carrinho", {
          timeout: 2000,
        });
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(
        (product) => product.id !== item.id
      );
      toast.success("Item removido do carrinho", {
        timeout: 2000,
      });
    },
  },
});
