<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0M15 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M11 7.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0\"/>";
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
