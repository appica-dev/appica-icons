<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 11-1-3h-5l-1 3m3-3V6a1 1 0 0 1 1-1h1M3 11v6h2l1-1.5L9 17h10a3 3 0 0 0 0-6H9l-3 1.5L5 11z\"/>";
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
