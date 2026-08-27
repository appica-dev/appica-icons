<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.1 13q4.9 0 7.9-.5c3-.5 4-2 4-3.5a3 3 0 0 0-6 0c0 1.554 1.807 3 3 4s2 2.5 2 3.5a1.5 1.5 0 1 1-3 0c0-2 4-3.5 7-3.5h2.9M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/>";
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
