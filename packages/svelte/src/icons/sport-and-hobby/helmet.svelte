<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 9h-8.8a1 1 0 0 0-.969 1.246q.76 3 3.268 4.254 3 1.5 7 1.5M12 4a9 9 0 0 1 5.656 16H6.343A9 9 0 0 1 12 4\"/>";
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
