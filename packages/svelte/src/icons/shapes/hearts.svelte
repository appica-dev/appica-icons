<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14.018 18-2.017 2-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 0 1 8.153 5.784M15.991 20l4.197-4.223a2.81 2.81 0 0 0 0-3.948 2.746 2.746 0 0 0-3.91-.007l-.28.282-.279-.283a2.746 2.746 0 0 0-3.91-.007 2.81 2.81 0 0 0-.007 3.948L15.984 20z\"/>";
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
