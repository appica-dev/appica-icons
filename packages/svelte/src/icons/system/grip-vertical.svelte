<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6-14a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
