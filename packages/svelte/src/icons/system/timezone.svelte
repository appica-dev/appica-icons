<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.883 10.554a9 9 0 1 0-10.337 10.328M3.599 9h16.8m-16.8 6h6.9m1-12a17 17 0 0 0-1.502 14.954M12.499 3a17 17 0 0 1 2.52 7.603m2.98 5.897V18l.5.5m-4.5-.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0\"/>";
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
