<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.3 6.408l1.173 1.442c.685.832 1.161 1.805 1.39 2.84a6.52 6.52 0 0 1-.072 3.12l-.012.047-.008.034c-.08.357-2.02 8.328-15.021 6.269l3.954-2.574-1.173-1.442c-.685-.832-1.161-1.805-1.39-2.84a6.52 6.52 0 0 1 .071-3.12l.012-.047.008-.034c.08-.357 2.016-8.313 15.018-6.267L16.3 6.408zm-1.285 5.591a3.01 3.01 0 1 1-6.029 0 3.01 3.01 0 1 1 6.029 0z\"/>";
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
