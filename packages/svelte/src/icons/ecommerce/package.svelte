<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21c-.727 0-1.422-.297-2.812-.892C5.73 18.63 4 17.89 4 16.646V7.5M12 21c.727 0 1.422-.297 2.812-.892C18.27 18.63 20 17.89 20 16.646V7.5M12 21v-9.58M6.666 12l1.778.9m8-8.1-8.89 4.5m-1.416-.65 2.596 1.272c1.603.785 2.404 1.178 3.266 1.178s1.663-.393 3.266-1.178l2.597-1.272C19.288 7.952 20 7.603 20 7.05s-.712-.902-2.137-1.6l-2.597-1.272C13.663 3.393 12.862 3 12 3s-1.663.393-3.266 1.178L6.138 5.45C4.713 6.148 4 6.497 4 7.05s.713.902 2.138 1.6\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
