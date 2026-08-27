<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0M16 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M13.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M13.5 18.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8.5 18.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3.5 18.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M18.5 18.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
