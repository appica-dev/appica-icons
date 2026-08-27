<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4h9a2 2 0 0 1 2 2v9m-.179 3.828A2 2 0 0 1 17 20H6a1 1 0 0 1-1-1V5m4-1v1m0 4v13m4-14h2M3 3l18 18\"/>";
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
