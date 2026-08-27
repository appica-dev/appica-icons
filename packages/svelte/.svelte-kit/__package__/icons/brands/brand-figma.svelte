<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 0a3 3 0 1 0 0-6H9a3 3 0 1 0 0 6m6 0H9m0 0a3 3 0 1 0 0 6m0 0h3m-3 0a3 3 0 1 0 3 3V3\"/>";
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
