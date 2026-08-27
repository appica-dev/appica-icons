<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 12a2 2 0 0 0-2-2m2 2a2 2 0 0 1-2 2m2-2c0-3.314-2.462-6-5.5-6S3 8.686 3 12m9-2a2 2 0 0 0-2 2m2-2c-3.314 0-6 2.462-6 5.5S8.686 21 12 21m-2-9a2 2 0 0 0 2 2m-2-2c0 3.314 2.462 6 5.5 6s5.5-2.686 5.5-6m-9 2c3.314 0 6-2.462 6-5.5S15.314 3 12 3\"/>";
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
