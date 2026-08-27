<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13.5 6.5 4 4M19 18v.01M4 20h4L18.5 9.5a2.828 2.828 0 0 0-4-4L4 16zm17.121.121a3 3 0 1 0-4.242 0q.627.629 2.121 1.88 1.577-1.335 2.121-1.88\"/>";
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
