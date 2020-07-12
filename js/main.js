function main() {
  $("#contact").animatedModal({
      animatedIn:'slideInUp',
      animatedOut:'slideOutDown',
      color:'#ebf8ff'
    });

  $("#about").animatedModal({
      animatedIn:'slideInUp',
      animatedOut:'slideOutDown',
      color:'#001972'
    });

  $("#work").animatedModal({
      animatedIn:'slideInUp',
      animatedOut:'slideOutDown',
      color:'#FFF'
    });

  // Landing Page Animations
  $("#shape1").animate({left: '70%'}, 2000);
  $("#shape2").animate({left: '30%'}, 1000);
  $("#shape3").animate({left: '50%'}, 3000);
};

$(document).ready(main());
