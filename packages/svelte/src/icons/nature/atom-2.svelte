<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 20.99V21M3 9.02v.01m18-.01v.01M8 20.092a9 9 0 0 1-3.413-2.9A8.96 8.96 0 0 1 3 13.01m13 7.082a9 9 0 0 0 3.413-2.9A8.97 8.97 0 0 0 21 13.01M6.2 5.03a9.014 9.014 0 0 1 11.4 0M9 12.012c0 .794.316 1.555.879 2.117a3.004 3.004 0 0 0 4.242 0 2.99 2.99 0 0 0 0-4.233 3.004 3.004 0 0 0-4.242 0A3 3 0 0 0 9 12.012\"/>";
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
