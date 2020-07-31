class CreateChats {
   constructor() {
      this.$el = document.querySelector('.chats__list-scroll ul');
      this.html = `
         <li class="chats__list-item">
            <div class="item-icon">
               <img src='./img/img_avatar3.png' alt="" class="item-avatar">
            </div>
            <div class="item-description">
               <p class="item-name">Some chat name</p>
               <p class="item-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ullam.</p>
            </div>
            <div class="item-meta">
               <p class="msg-time">18:12</p>
               <p class="unread-counter">26</p>
            </div>
         </li>
      `;
   }

   renderElements(numb) {
      for(let i = 0; i <= numb; i++) {
         this.$el.insertAdjacentHTML('afterend', this.html);
      }
   }
}


window.addEventListener('load', () => {
   const chats = new CreateChats();
   chats.renderElements(20);
});
