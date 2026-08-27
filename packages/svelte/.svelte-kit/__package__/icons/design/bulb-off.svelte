<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7-.7.7m-6.611.783a5 5 0 0 1 5.826 5.84m-1.378 2.611A5 5 0 0 1 15 16a3.5 3.5 0 0 0-1 3 2 2 0 0 1-4 0 3.5 3.5 0 0 0-1-3 5 5 0 0 1-.528-7.544M9.7 17h4.6M3 3l18 18\"/>";
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
