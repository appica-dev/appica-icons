<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 8h5m6 0h4M4 13V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a3 3 0 0 0 6 0V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a8 8 0 0 1-16 0\"/>";
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
