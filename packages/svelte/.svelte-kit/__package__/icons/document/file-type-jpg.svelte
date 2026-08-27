<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 3v4a1 1 0 0 0 1 1h4m-5-5H7a2 2 0 0 0-2 2v7m9-9 5 5m0 0v4m-8 6h1.5a1.5 1.5 0 1 0 0-3H11v6m9-6h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v-3M5 15h3v4.5a1.5 1.5 0 0 1-3 0\"/>";
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
