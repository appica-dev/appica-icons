<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 20V6m0 0a4 4 0 0 0-.4-1.8M12 6a4 4 0 0 1 .4-1.8M4 6a4 4 0 0 1 .4-1.8M7 2.1a4 4 0 0 1 2 0m6 0a4 4 0 0 1 2 0M20 6a4 4 0 0 0-.4-1.8M11 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-8-9 5.5 5.5a5 5 0 0 1 7 0L21 11a12 12 0 0 0-18 0\"/>";
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
