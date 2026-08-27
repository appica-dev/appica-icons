<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12 20 2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M8.747 8.748C8.087 11.582 6.211 13 4 13m0-6.629h2.371M5 9c0 2.144 2.252 3.908 6 4M3 3l18 18\"/>";
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
