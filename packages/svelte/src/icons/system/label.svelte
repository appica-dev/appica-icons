<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.52 7H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10.52a1 1 0 0 0 .78-.375L21 12l-3.7-4.625A1 1 0 0 0 16.52 7\"/>";
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
