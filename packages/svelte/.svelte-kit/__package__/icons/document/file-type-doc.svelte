<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 3v4a1 1 0 0 0 1 1h4m-5-5H7a2 2 0 0 0-2 2v7m9-9 5 5m0 0v4m1 4.5a1.5 1.5 0 1 0-3 0v3a1.5 1.5 0 1 0 3 0M5 15v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm7.5 0a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 1 1-3 0v-3a1.5 1.5 0 0 1 1.5-1.5\"/>";
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
