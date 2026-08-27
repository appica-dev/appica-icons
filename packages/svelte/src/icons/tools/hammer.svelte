<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m11.189 9.741-7.557 7.593a2.14 2.14 0 0 0 0 3.038 2.16 2.16 0 0 0 3.046 0l7.581-7.56m3.794 2.347 2.647-2.647a1.024 1.024 0 0 0 0-1.447L12.936 3.3a1.023 1.023 0 0 0-1.447 0L8.842 5.947a1.024 1.024 0 0 0 0 1.447l7.764 7.765a1.023 1.023 0 0 0 1.447 0\"/>";
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
