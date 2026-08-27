<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m19.501 12.576-.535.53m-7.906 5.957-6.55-6.486a4.998 4.998 0 1 1 7.495-6.564 4.997 4.997 0 1 1 7.496 6.569m.5 8.418L22 19l-1.999-1.998m-2.998 0-2 1.999 2 1.999\"/>";
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
