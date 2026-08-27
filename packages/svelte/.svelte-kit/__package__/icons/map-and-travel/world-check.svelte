<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.945 12.99a9 9 0 1 0-9.46 7.995M3.6 9h16.8M3.6 15h13.9m-6-12a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.311 12.001M15 19l2 2 4-4\"/>";
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
