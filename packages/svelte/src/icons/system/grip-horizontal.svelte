<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0m7-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0m7-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
