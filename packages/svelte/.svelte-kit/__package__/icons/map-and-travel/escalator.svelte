<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.5 5h-2.672a2 2 0 0 0-1.414.586L7 14H4.5a2.5 2.5 0 0 0 0 5h3.672a2 2 0 0 0 1.414-.586L18 10h1.5a2.5 2.5 0 0 0 0-5\"/>";
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
