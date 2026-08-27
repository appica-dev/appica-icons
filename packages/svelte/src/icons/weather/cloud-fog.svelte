<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.001 20h14m-12-4a4.82 4.82 0 0 1-3.326-1.318A4.4 4.4 0 0 1 2.297 11.5c0-1.194.496-2.338 1.378-3.182A4.82 4.82 0 0 1 7 7c.295-1.313 1.157-2.467 2.397-3.207 1.24-.741 2.756-1.008 4.215-.743 1.458.265 2.74 1.041 3.563 2.157s1.12 2.48.825 3.793h1a3.5 3.5 0 1 1 0 7z\"/>";
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
