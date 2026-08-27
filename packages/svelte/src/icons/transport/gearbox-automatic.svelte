<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 11h1.5a1.5 1.5 0 1 0 0-3H17v5M5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v3a1 1 0 0 0 1 1h3m0 0v7a1 1 0 0 0 1 1h3m-4-8h4m4 6v4h1a2 2 0 0 0 0-4z\"/>";
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
