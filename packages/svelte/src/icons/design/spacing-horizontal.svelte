<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 20h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M4 20h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4m8 4v8\"/>";
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
